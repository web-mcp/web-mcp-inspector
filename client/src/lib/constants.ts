import { InspectorConfig } from "./configurationTypes";

// OAuth-related session storage keys
export const SESSION_KEYS = {
  CODE_VERIFIER: "mcp_code_verifier",
  SERVER_URL: "mcp_server_url",
  TOKENS: "mcp_tokens",
  CLIENT_INFORMATION: "mcp_client_information",
  SERVER_METADATA: "mcp_server_metadata",
} as const;

// Generate server-specific session storage keys
export const getServerSpecificKey = (
  baseKey: string,
  serverUrl?: string,
): string => {
  if (!serverUrl) return baseKey;
  return `[${serverUrl}] ${baseKey}`;
};

export type ConnectionStatus =
  | "disconnected"
  | "connected"
  | "error"
  | "error-connecting-to-proxy";

export const DEFAULT_MCP_PROXY_LISTEN_PORT = "6277";

/**
 * Default configuration for the MCP Inspector, Currently persisted in local_storage in the Browser.
 * Future plans: Provide json config file + Browser local_storage to override default values
 **/
export const DEFAULT_INSPECTOR_CONFIG: InspectorConfig = {
  MCP_SERVER_REQUEST_TIMEOUT: {
    label: "Request Timeout",
    description: "Timeout for requests to the MCP server (ms)",
    value: 10000,
  },
  MCP_REQUEST_TIMEOUT_RESET_ON_PROGRESS: {
    label: "Reset Timeout on Progress",
    description: "Reset timeout on progress notifications",
    value: true,
  },
  MCP_REQUEST_MAX_TOTAL_TIMEOUT: {
    label: "Maximum Total Timeout",
    description:
      "Maximum total timeout for requests sent to the MCP server (ms) (Use with progress notifications)",
    value: 60000,
  },
  MCP_PROXY_FULL_ADDRESS: {
    label: "Inspector Proxy Address",
    description:
      "Set this if you are running the MCP Inspector Proxy on a non-default address. Example: http://10.1.1.22:5577",
    value: "",
  },
} as const;
