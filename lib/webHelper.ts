/**
 *
 */
export class webHelper {
  /**
   * 获取客户端请求IP
   * @param req
   */
  public static getReqIp(req: any): string {
    if (req == undefined) return ''

    //x-forwarded-for: client, proxy1, proxy2, proxy3 第一个为客户端ip
    if (req.headers && req.headers['x-forwarded-for']) {
      const steps = req.headers['x-forwarded-for'].split(',')
      if (steps.length > 0) return steps[0]
    }

    if (req.headers && req.headers['cf-connecting-ip']) return req.headers['cf-connecting-ip']

    if (req.connection && req.connection.remoteAddress) return req.connection.remoteAddress

    if (req.socket && req.socket.remoteAddress) return req.socket.remoteAddress

    if (req.connection && req.connection.socket && req.connection.socket.remoteAddress)
      return req.connection.socket.remoteAddress

    if (req.ip) return req.ip

    return ''
  }
}
