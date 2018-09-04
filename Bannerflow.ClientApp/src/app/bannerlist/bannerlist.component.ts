import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { BannerformComponent } from '../bannerform/bannerform.component';

import { BannerService } from '../services/banner.service';
import { IBanner} from '../model/banner';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
  selector: 'app-bannerlist',
  templateUrl: './bannerlist.component.html',
  styleUrls: ['./bannerlist.component.css']
})
export class BannerlistComponent implements OnInit {
  banners: IBanner[];
  banner: IBanner;
  loadingState: boolean;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;
  displayedColumns = ["id", "created", "modified", "action"];

  // setting up datasource for material table
  dataSource = new MatTableDataSource<IBanner>();

  constructor(public snackBar: MatSnackBar, private _bannerService: BannerService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadingState = true;
    this.loadBanners();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(BannerformComponent, {
      width: '500px',
      data: { dbops: this.dbops, modalTitle: this.modalTitle, modalBtnTitle: this.modalBtnTitle, banner: this.banner }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === 'success') {
        this.loadingState = true;
        this.loadBanners();
        switch (this.dbops) {
          case DBOperation.create:
            this.showMessage('Data successfully added.');
            break;
          case DBOperation.update:
            this.showMessage('Data successfully updated.');
            break;
          case DBOperation.delete:
            this.showMessage('Data successfully deleted.');
            break;
        }
      } else if (result === 'error') {
        this.showMessage('There is some issue in saving records, please contact to system administrator!');
      } else {
        // this.showMessage('Please try again, something went wrong');
      }
    });
  }

  loadBanners(): void {
    this._bannerService.getAllBanners(Global.BASE_USER_ENDPOINT)
      .subscribe(banners => {
        this.loadingState = false;
        this.dataSource.data = banners;
      });
  }
  addBanner() {
    this.dbops = DBOperation.create;
    this.modalTitle = 'Add New Banner';
    this.modalBtnTitle = 'Add';
    this.openDialog();
  }
  editBanner(id: string) {
    this.dbops = DBOperation.update;
    this.modalTitle = 'Edit Banner';
    this.modalBtnTitle = 'Update';
    this.banner = this.dataSource.data.filter(x => x.id === id)[0];
    this.openDialog();
  }
  deleteBanner(id: string) {
    this.dbops = DBOperation.delete;
    this.modalTitle = 'Confirm to Delete ?';
    this.modalBtnTitle = 'Delete';
    this.banner = this.dataSource.data.filter(x => x.id === id)[0];
    this.openDialog();
  }
  showMessage(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 3000
    });
  }
}
