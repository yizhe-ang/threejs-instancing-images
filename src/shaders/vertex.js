export default /* glsl */ `
  uniform float uUvScale;

  attribute vec3 aPosition;
  attribute vec2 aUvOffset;

  varying vec2 vUv;

  void main() {
    vec3 pos = position;

    pos += aPosition;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vUv = uv * uUvScale + aUvOffset;
  }
`;
