precision mediump float;

#define ORB_COUNT {{ORB_COUNT}}

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_repel_orbs[ORB_COUNT];

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;

  vec3 color = vec3(1.1, 1.2, 1.3);

  for (int i = 0; i < ORB_COUNT; i++) {
    vec3 obj = u_repel_orbs[i];
    float d = distance(uv, obj.xy);

    float glow = 0.02 / (d + 0.01);
    glow *= 1.0 - smoothstep(0.01, 0.40, d);

    color -= vec3(glow);
  }

  color = clamp(color, 0.0, 1.0);

  gl_FragColor = vec4(color, 1.0);
}
