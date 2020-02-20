import { Injectable } from '@angular/core';
import { configuration } from './configuration';

@Injectable()
export class ConfigService {
 config = configuration;
 title = 'posts';
  constructor() { }
  getConfig() {
    return this.config;
  }
  getPostByID(id: number) {
  return this.config.blog.posts[ id - 1 ];
  }
}
