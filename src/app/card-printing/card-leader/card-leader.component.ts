import { Component, OnInit } from '@angular/core';
import { LeaderCardType } from 'src/app/core/models/constants';
import { Member } from 'src/app/core/models/member';
import { Page } from 'src/app/core/models/page';
import { CardPrintingService } from 'src/app/core/services/card-printing.service';
import { paging } from 'src/app/core/utils/paging';

@Component({
  selector: 'app-card-leader',
  templateUrl: './card-leader.component.html',
  styleUrls: ['./card-leader.component.scss'],
})
export class CardLeaderComponent implements OnInit {
  public enum: typeof LeaderCardType = LeaderCardType;

  public data: Member[] = [
    {
      id: 1,
      fullName: 'Phạm Hoàng Dủ',
      religiousName: 'Đồng Khả Nhân',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/279834538_789486402022850_1764428629689475795_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LAU5WJY1dzgAX_6k-sU&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfA6405k97f5WGw5sZRdpsvrjenqU7oyUDLF_AOK4eNdeg&oe=637A0348',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 2,
      fullName: 'Phạm Hoàng Dủ',
      religiousName: 'Đồng Khả Nhân',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/279834538_789486402022850_1764428629689475795_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LAU5WJY1dzgAX_6k-sU&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfA6405k97f5WGw5sZRdpsvrjenqU7oyUDLF_AOK4eNdeg&oe=637A0348',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 3,
      fullName: 'Phạm Hoàng Dủ',
      religiousName: 'Đồng Khả Nhân',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/279834538_789486402022850_1764428629689475795_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LAU5WJY1dzgAX_6k-sU&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfA6405k97f5WGw5sZRdpsvrjenqU7oyUDLF_AOK4eNdeg&oe=637A0348',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 4,
      fullName: 'Phạm Hoàng Dủ',
      religiousName: 'Đồng Khả Nhân',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/279834538_789486402022850_1764428629689475795_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LAU5WJY1dzgAX_6k-sU&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfA6405k97f5WGw5sZRdpsvrjenqU7oyUDLF_AOK4eNdeg&oe=637A0348',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 5,
      fullName: 'Phạm Hoàng Dủ',
      religiousName: 'Đồng Khả Nhân',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/279834538_789486402022850_1764428629689475795_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LAU5WJY1dzgAX_6k-sU&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfA6405k97f5WGw5sZRdpsvrjenqU7oyUDLF_AOK4eNdeg&oe=637A0348',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 6,
      fullName: 'Phạm Hoàng Dủ',
      religiousName: 'Đồng Khả Nhân',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/279834538_789486402022850_1764428629689475795_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LAU5WJY1dzgAX_6k-sU&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfA6405k97f5WGw5sZRdpsvrjenqU7oyUDLF_AOK4eNdeg&oe=637A0348',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 7,
      fullName: 'Phạm Hoàng Dủ',
      religiousName: 'Đồng Khả Nhân',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/279834538_789486402022850_1764428629689475795_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LAU5WJY1dzgAX_6k-sU&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfA6405k97f5WGw5sZRdpsvrjenqU7oyUDLF_AOK4eNdeg&oe=637A0348',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 8,
      fullName: 'Phạm Hoàng Dủ',
      religiousName: 'Đồng Khả Nhân',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/279834538_789486402022850_1764428629689475795_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LAU5WJY1dzgAX_6k-sU&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfA6405k97f5WGw5sZRdpsvrjenqU7oyUDLF_AOK4eNdeg&oe=637A0348',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 9,
      fullName: 'Phạm Hoàng Dủ',
      religiousName: 'Đồng Khả Nhân',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/279834538_789486402022850_1764428629689475795_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LAU5WJY1dzgAX_6k-sU&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfA6405k97f5WGw5sZRdpsvrjenqU7oyUDLF_AOK4eNdeg&oe=637A0348',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 10,
      fullName: 'Phạm Hoàng Dủ',
      religiousName: 'Đồng Khả Nhân',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/279834538_789486402022850_1764428629689475795_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LAU5WJY1dzgAX_6k-sU&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfA6405k97f5WGw5sZRdpsvrjenqU7oyUDLF_AOK4eNdeg&oe=637A0348',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
  ];

  public recordsPerPage: number = 9;
  public pages: Page[] = [];
  public cards: Member[] = [];
  
  constructor(private cardPritingService: CardPrintingService) {}

  ngOnInit(): void {
    this.getLeaderCardsPrinting();
  }

  public getLeaderCardsPrinting(){
    this.cards.push(...this.data);
    console.log(this.cards);
    
    const pagingResult = paging(this.cards, this.recordsPerPage);

    this.pages.push(...pagingResult);
    console.log('pages---------',this.pages);
  }
}