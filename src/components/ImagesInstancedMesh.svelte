<script>
	import { T, useTexture } from '@threlte/core';
	import vertexShader from '../shaders/vertex.js';
	import fragmentShader from '../shaders/fragment.js';
	import { DoubleSide, FrontSide, NearestFilter, PlaneGeometry } from 'three';

	export let atlasPath;
	export let numAtlasColumns;
	export let positions;
  export let doubleSide = false;
  export let magFilter = true;

	const numImgs = numAtlasColumns ** 2;

	// Load atlas texture
	const atlasTexture = useTexture(atlasPath);
  if (!magFilter) atlasTexture.magFilter = NearestFilter

	// Blueprint geometry
	const geometry = new PlaneGeometry(1, 1);

	// Init instance attributes
	const uvOffsets = new Float32Array(numImgs * 2);

	for (let i = 0; i < numImgs; i++) {
		uvOffsets.set(
			[(i % numAtlasColumns) / numAtlasColumns, Math.floor(i / numAtlasColumns) / numAtlasColumns],
			i * 2
		);
	}
</script>

<T.Mesh frustumCulled={false}>
	<T.ShaderMaterial
		uniforms={{
			uTexture: { value: atlasTexture },
			uUvScale: { value: 1 / numAtlasColumns }
		}}
		{vertexShader}
		{fragmentShader}
		transparent
		depthWrite={false}
		side={doubleSide ? DoubleSide : FrontSide}
	/>
	<T.InstancedBufferGeometry
		instanceCount={numImgs}
		attributes.position={geometry.getAttribute('position')}
		attributes.uv={geometry.getAttribute('uv')}
		index={geometry.index}
	>
		<T.InstancedBufferAttribute attach="attributes.aPosition" args={[positions, 3, 1]} />
		<T.InstancedBufferAttribute attach="attributes.aUvOffset" args={[uvOffsets, 2, 1]} />
	</T.InstancedBufferGeometry>
</T.Mesh>
