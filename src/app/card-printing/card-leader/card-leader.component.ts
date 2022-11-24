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
  public data: Member[] = [
    {
      id: 1,
      fullName: 'Đặng Văn Hòa',
      religiousName: 'Nghiêm Khải Tuệ',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        '../../assets/avatar/DangVanHoa_NghiemKhaiTue.jpg',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 2,
      fullName: 'Đặng Văn Hòa',
      religiousName: 'Nghiêm Khải Tuệ',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        '../../assets/avatar/DangVanHoa_NghiemKhaiTue.jpg',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 3,
      fullName: 'Đặng Văn Hòa',
      religiousName: 'Nghiêm Khải Tuệ',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        '../../assets/avatar/DangVanHoa_NghiemKhaiTue.jpg',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 4,
      fullName: 'Đặng Văn Hòa',
      religiousName: 'Nghiêm Khải Tuệ',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        '../../assets/avatar/DangVanHoa_NghiemKhaiTue.jpg',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 5,
      fullName: 'Đặng Văn Hòa',
      religiousName: 'Nghiêm Khải Tuệ',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        '../../assets/avatar/DangVanHoa_NghiemKhaiTue.jpg',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 6,
      fullName: 'Đặng Văn Hòa',
      religiousName: 'Nghiêm Khải Tuệ',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        '../../assets/avatar/DangVanHoa_NghiemKhaiTue.jpg',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 7,
      fullName: 'Đặng Văn Hòa',
      religiousName: 'Nghiêm Khải Tuệ',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        '../../assets/avatar/DangVanHoa_NghiemKhaiTue.jpg',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 8,
      fullName: 'Đặng Văn Hòa',
      religiousName: 'Nghiêm Khải Tuệ',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        '../../assets/avatar/DangVanHoa_NghiemKhaiTue.jpg',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 9,
      fullName: 'Đặng Văn Hòa',
      religiousName: 'Nghiêm Khải Tuệ',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        '../../assets/avatar/DangVanHoa_NghiemKhaiTue.jpg',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
    {
      id: 10,
      fullName: 'Đặng Văn Hòa',
      religiousName: 'Nghiêm Khải Tuệ',
      registerCode: 'TT-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        '../../assets/avatar/DangVanHoa_NghiemKhaiTue.jpg',
      departmentCode: 'TT',
      positionType: 1,
      qrCode: 'a',
    },
  ];

  public enum: typeof LeaderCardType = LeaderCardType;
  public recordsPerPage: number = 9;
  public pages: Page[] = [];
  public cards: Member[] = [];
  
  constructor(private cardPritingService: CardPrintingService) {}

  ngOnInit(): void {
    this.getLeaderCardsPrinting();
  }

  public getLeaderCardsPrinting(){
    // TODO: call api to get leader cards
    this.cards.push(...this.data);
    
    const pagingResult = paging(this.cards, this.recordsPerPage);

    this.pages.push(...pagingResult);
  }
}