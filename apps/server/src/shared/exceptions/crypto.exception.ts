import { HttpStatus } from '@nestjs/common';
import { BusinessException } from './business.exception';
import { ResponseCode } from '../response';

/**
 * 加解密异常
 *
 * 用于 RSA/AES 加解密操作失败时抛出
 *
 * @example
 * ```typescript
 * throw new CryptoException('RSA 解密失败');
 * throw CryptoException.rsaDecryptFailed();
 * throw CryptoException.aesDecryptFailed();
 * ```
 */
export class CryptoException extends BusinessException {
  constructor(message: string = '加解密操作失败') {
    super(ResponseCode.INTERNAL_SERVER_ERROR, message);
  }

  /**
   * RSA 解密失败
   */
  static rsaDecryptFailed(): CryptoException {
    return new CryptoException('RSA 解密失败，请检查密钥配置');
  }

  /**
   * RSA 加密失败
   */
  static rsaEncryptFailed(): CryptoException {
    return new CryptoException('RSA 加密失败，请检查密钥配置');
  }

  /**
   * AES 解密失败
   */
  static aesDecryptFailed(): CryptoException {
    return new CryptoException('AES 解密失败，数据可能已损坏');
  }

  /**
   * AES 加密失败
   */
  static aesEncryptFailed(): CryptoException {
    return new CryptoException('AES 加密失败');
  }
}
