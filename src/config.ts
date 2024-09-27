type Environment = "local";

interface BackendURLs {
  local: string;
}

export interface ConfigType {
  serverSideBaseURL: string;
  pythonBackendBaseURL: string;
}

const pythonBackendUrls: BackendURLs = {
  local: "http://127.0.0.1:5001",
};

const serverSideURLs: BackendURLs = {
  local: "http://127.0.0.1:3000",
};

const environment: Environment = "local" as Environment;

export const urlConfig: ConfigType = {
  serverSideBaseURL: serverSideURLs[environment],
  pythonBackendBaseURL: pythonBackendUrls[environment],
};
