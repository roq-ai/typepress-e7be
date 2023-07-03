import { ContentInterface } from 'interfaces/content';
import { PluginInterface } from 'interfaces/plugin';
import { TemplateInterface } from 'interfaces/template';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  content?: ContentInterface[];
  plugin?: PluginInterface[];
  template?: TemplateInterface[];
  user?: UserInterface;
  _count?: {
    content?: number;
    plugin?: number;
    template?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
