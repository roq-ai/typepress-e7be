import axios from 'axios';
import queryString from 'query-string';
import { PluginInterface, PluginGetQueryInterface } from 'interfaces/plugin';
import { GetQueryInterface } from '../../interfaces';

export const getPlugins = async (query?: PluginGetQueryInterface) => {
  const response = await axios.get(`/api/plugins${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createPlugin = async (plugin: PluginInterface) => {
  const response = await axios.post('/api/plugins', plugin);
  return response.data;
};

export const updatePluginById = async (id: string, plugin: PluginInterface) => {
  const response = await axios.put(`/api/plugins/${id}`, plugin);
  return response.data;
};

export const getPluginById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/plugins/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePluginById = async (id: string) => {
  const response = await axios.delete(`/api/plugins/${id}`);
  return response.data;
};
