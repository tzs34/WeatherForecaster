export default {
  rules: {
  notauthenticated: 1 << 0, // 1
  authenticated: 1 << 1, // 2
  authenticating: 1 << 2, // 4
  nodata: 1 << 4, // 16
  hasdata: 1 << 6, // 64
  error: 1 << 8, // 256
  }
}
