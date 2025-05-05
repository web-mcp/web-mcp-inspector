import { InspectorConfig } from "@/lib/configurationTypes";
import { DEFAULT_MCP_PROXY_LISTEN_PORT } from "@/lib/constants";

export const getMCPProxyAddress = (config: InspectorConfig): string => {
  const proxyFullAddress = config.MCP_PROXY_FULL_ADDRESS.value as string;
  if (proxyFullAddress) {
    return proxyFullAddress;
  }
  return `${window.location.protocol}//${window.location.hostname}:${DEFAULT_MCP_PROXY_LISTEN_PORT}`;
};

export const getMCPServerRequestTimeout = (config: InspectorConfig): number => {
  return config.MCP_SERVER_REQUEST_TIMEOUT.value as number;
};

export const resetRequestTimeoutOnProgress = (
  config: InspectorConfig,
): boolean => {
  return config.MCP_REQUEST_TIMEOUT_RESET_ON_PROGRESS.value as boolean;
};

export const getMCPServerRequestMaxTotalTimeout = (
  config: InspectorConfig,
): number => {
  return config.MCP_REQUEST_MAX_TOTAL_TIMEOUT.value as number;
};

export const getSseUrl = () => {
  if(globalThis.location) {
    const p = new URLSearchParams(location.search)
    const url = p.get("url")
    if(url) return url
  }
  return localStorage.getItem("lastSseUrl") || "http://localhost:3001/sse";
}

export const getTransportType = () => {
  if(globalThis.location) {
    const p = new URLSearchParams(location.search)
    const type = p.get("type")
    if(type && ['sse', 'streamable-http'].includes(type)) return type
  }
  return localStorage.getItem("lastTransportType") || 'sse'
}
