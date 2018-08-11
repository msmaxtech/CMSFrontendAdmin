import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../@core/data/client.service';

@Component({
  selector: 'ngx-user-profile',
  styleUrls: ['./user-profile.component.scss'],
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  client: any;
  constructor(private clientService: ClientService) {
  }
  starRate = 2;
  heartRate = 4;

  ngOnInit() {

    this.clientService.getClientMaster().subscribe((clients: any) => {
      this.client = clients;
      console.log('clients..' + this.client.clientName);
    });
  }
}
