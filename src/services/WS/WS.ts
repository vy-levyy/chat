import { ORIGIN_WS } from 'src/consts';

export class WS {
  private static ws: Nullable<WebSocket> = null;

  public static async connect() {
    WS.ws = new WebSocket(ORIGIN_WS);

    return new Promise((resolve, reject) => {
      if (WS.ws) {
        WS.ws.onopen = () => resolve(true);
      } else {
        reject();
      }
    });
  }

  public static send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void {
    WS.ws?.send(data);
  }

  public static addMessageListener(listener: (event: MessageEvent<any>) => void) {
    WS.ws?.addEventListener('message', listener);
  }

  public static close() {
    WS.ws?.close();
  }
}
