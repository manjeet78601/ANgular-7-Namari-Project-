import { Injectable } from '@angular/core';
import { configuration } from './configuration';

export class ConfigService {
 config = configuration;
  constructor() { }
  getConfig() {
    return this.config;
  }
  getPostByID(id: number) {
  return this.config.blog.posts[ id  - 1 ];
  }
}
