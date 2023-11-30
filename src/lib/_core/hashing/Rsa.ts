import crypto, { KeyLike } from "crypto";

export default class Rsa {
  private privateKey?: KeyLike;
  private publicKey?: KeyLike;
  encoding: BufferEncoding = "hex";
  algorithm: string = "sha256";
  constructor() {}
  public static generateKeyPairs() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
      modulusLength: 2048,
    });
    return {
      publicKey: publicKey.export({ type: "pkcs1", format: "pem" }),
      privateKey: privateKey.export({ type: "pkcs1", format: "pem" }),
    };
  }
  public importPublicKey(key: string) {
    this.publicKey = key as KeyLike;
  }
  public importPrivateKey(key: string) {
    this.privateKey = key as KeyLike;
  }
  public publicEncrypt(data: string) {
    if (!this.publicKey) return false;
    return crypto
      .publicEncrypt(
        {
          key: this.publicKey,
          padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
          oaepHash: this.algorithm,
        },
        Buffer.from(data)
      )
      .toString(this.encoding);
  }
  public privateDecrypt(ciphertext: string) {
    if (!this.privateKey) return false;
    return crypto
      .privateDecrypt(
        {
          key: this.privateKey,
          padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
          oaepHash: this.algorithm,
        },
        Buffer.from(ciphertext, this.encoding)
      )
      .toString();
  }
  public privateEncrypt(data: string) {
    if (!this.privateKey) return false;
    return crypto
      .privateEncrypt(this.privateKey, Buffer.from(data))
      .toString(this.encoding);
  }
  public publicDecrypt(ciphertext: string) {
    if (!this.publicKey) return false;
    return crypto
      .publicDecrypt(this.publicKey, Buffer.from(ciphertext, this.encoding))
      .toString();
  }
  public sign(data: string) {
    if (!this.privateKey) return false;
    return crypto
      .sign(this.algorithm, Buffer.from(data), this.privateKey)
      .toString(this.encoding);
  }
  public verify(signature: string, verifiableData: string) {
    if (!this.publicKey) return false;
    return crypto.verify(
      this.algorithm,
      Buffer.from(verifiableData),
      this.publicKey as string,
      Buffer.from(signature, this.encoding)
    );
  }
}
