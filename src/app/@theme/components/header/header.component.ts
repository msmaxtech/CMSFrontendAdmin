import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import {ClientService} from '../../../@core/data/client.service';
import {ClientMaster} from '../../../@core/models/ClientMaster.model';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;
client: any;
  userMenu = [{ title: 'Profile',  link: 'user-profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private clientService: ClientService) {
  }
  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);

    this.clientService.getClientMaster().
    subscribe((clients: any) => {
      this.client = clients;
      console.log('clients..' +  this.client);
    });



  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
 }

}
