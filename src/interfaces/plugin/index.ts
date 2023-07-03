import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface PluginInterface {
  id?: string;
  name: string;
  user_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface PluginGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
  organization_id?: string;
}
