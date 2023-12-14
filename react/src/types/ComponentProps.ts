import {WebLNProvider} from '@webbtc/webln-types';

export type ComponentProps = {
  onConnected?(provider: WebLNProvider): void;
  onConnecting?(): void;
  onDisconnected?(): void;
  onModalOpened?(): void;
  onModalClosed?(): void;
};
