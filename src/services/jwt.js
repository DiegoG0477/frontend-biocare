import { importJWK, SignJWT, jwtVerify } from 'jose'

const secretJWT = import.meta.env.VITE_SECRET_JWT;

export const encryptJwt = async (payload) => {
    const key = await importJWK({ kty: 'oct', k: secretJWT, alg: 'HS256' }, 'HS256')
    const jwt = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .sign(key)
    return jwt
}

export const verifyJwt = async (data) => {
  const key = await importJWK({ kty: 'oct', k: secretJWT, alg: 'HS256' }, 'HS256')
  const { payload, protectedHeader } = await jwtVerify(data, key)
  return payload
}