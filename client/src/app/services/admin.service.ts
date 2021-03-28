import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getUsersWithRoles() {
    return this.httpClient.get<Partial<User[]>>(this.baseUrl + 'admin/users-with-role');
  }

  updateUserRoles(username:string, roles: string[]) {
    return this.httpClient.post(this.baseUrl + 'admin/edit-roles/' + username + '?roles=' + roles, {});
  }
}
