import {ProviderCryptoServers} from './providerCryptoServers'
import {ProviderDigitalOcean} from './providerDigitalOcean'
import {ProviderLinodeServers} from './providerLinodeServers'

export class ProviderFactory {
  static register (name, config) {
    switch (name) {
      case DIGITALOCEAN_KEY:
        return new ProviderDigitalOcean(config)
      case CRYPTOSERVERS_KEY:
        return new ProviderCryptoServers(config)
      case LINODE_KEY:
        return new ProviderLinodeServers(config)
      default:
        throw new Error(`Unknown provider ${name}`)
    }
  }
}

export const DIGITALOCEAN_KEY = 'digitalocean'
export const CRYPTOSERVERS_KEY = 'cryptoservers'
export const LINODE_KEY = 'linode'
