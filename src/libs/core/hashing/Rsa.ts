import NodeRSA from "node-rsa";

export default class Rsa {
  key: NodeRSA;
  encoding: NodeRSA.Encoding = "hex";
  sourceEncoding: NodeRSA.Encoding = "hex";
  constructor() {
    this.key = new NodeRSA({ b: 1024 });
  }

  public generateKeyPiar(byteLen = 512) {
    return this.key.generateKeyPair(byteLen);
  }

  public sign(key: NodeRSA.KeyComponentsPublic, text: string) {
    this.key.importKey(key);
    return this.key.sign(Buffer.from(text), this.encoding, this.sourceEncoding);
  }

  public verify(
    text: string,
    signature: string,
    key: NodeRSA.KeyComponentsPublic
  ) {
    this.key.importKey(key);
    return this.key.verify(
      Buffer.from(text),
      signature,
      this.encoding,
      this.sourceEncoding
    );
  }

  public getPublicKey(encode: string = "pkcs8-public-pem") {
    return this.generateKey(encode);
  }

  public getPrivateKey(encode: string = "pkcs8-private-pem") {
    return this.generateKey(encode);
  }

  private generateKey(encode: string) {
    if (this.key.isEmpty()) throw new Error("Key is empty");
    return this.key.exportKey(encode as NodeRSA.FormatComponentsPublic);
  }
}
