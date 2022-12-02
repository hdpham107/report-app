import { Component, OnInit, OnDestroy } from '@angular/core';
import { Member } from '../../core/models/member';
import { CardType } from 'src/app/core/models/constants';
import { Page } from 'src/app/core/models/page';
import { CardPrintingService } from 'src/app/core/services/card-printing.service';
import { Subscription } from 'rxjs';
import { paging } from 'src/app/core/utils/paging';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  // public data: Member[] = [
  //   {
  //     id: 1,
  //     fullName: 'Phạm Hoàng Dủ',
  //     religiousName: 'Đồng Khả Nhân',
  //     registerCode: 'ATN-0001',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath:
  //       '../../assets/avatar/PhamHoangDu_DongKhaNhan.jpg',
  //     departmentCode: 'ATN',
  //     positionType: 2,
  //   },
  //   {
  //     id: 2,
  //     fullName: 'Đặng Văn Hòa',
  //     religiousName: 'Nghiêm Khải Tuệ',
  //     registerCode: 'BD-0002',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/DangVanHoa_NghiemKhaiTue.jpg',
  //     departmentCode: 'BD',
  //     positionType: 2,
  //   },
  //   {
  //     id: 3,
  //     fullName: 'Nguyễn Thị Vân Anh',
  //     religiousName: '',
  //     registerCode: 'BDS-0004',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath:
  //       'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg',
  //     departmentCode: 'BDS',
  //     positionType: 2,
  //   },
  //   {
  //     id: 4,
  //     fullName: 'Lê Vũ Như',
  //     religiousName: 'Viên Ân Nghĩa',
  //     registerCode: 'BRC-0004',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/LeVuNhu_VienAnNghia.png',
  //     departmentCode: 'BRC',
  //     positionType: 2,
  //   },
  //   {
  //     id: 5,
  //     fullName: 'Trương Thị Hoài Linh',
  //     religiousName: 'Huệ Duyên Hương',
  //     registerCode: 'BV-0004',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
  //     departmentCode: 'BV',
  //     positionType: 2,
  //   },
  //   {
  //     id: 6,
  //     fullName: 'Trương Thị Hoài Linh',
  //     religiousName: 'Huệ Duyên Hương',
  //     registerCode: 'CD-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
  //     departmentCode: 'CD',
  //     positionType: 2,
  //   },
  //   {
  //     id: 7,
  //     fullName: 'Trương Thị Hoài Linh',
  //     religiousName: 'Huệ Duyên Hương',
  //     registerCode: 'CH-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
  //     departmentCode: 'CH',
  //     positionType: 2,
  //   },
  //   {
  //     id: 8,
  //     fullName: 'Trương Thị Hoài Linh',
  //     religiousName: 'Huệ Duyên Hương',
  //     registerCode: 'CT-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
  //     departmentCode: 'CT',
  //     positionType: 2,
  //   },
  //   {
  //     id: 9,
  //     fullName: 'Trương Thị Hoài Linh',
  //     religiousName: 'Huệ Duyên Hương',
  //     registerCode: 'HD-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
  //     departmentCode: 'HD',
  //     positionType: 2,
  //   },
  //   {
  //     id: 10,
  //     fullName: 'Trương Thị Hoài Linh',
  //     religiousName: 'Huệ Duyên Hương',
  //     registerCode: 'HD1-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
  //     departmentCode: 'HD1',
  //     positionType: 2,
  //   },
  //   {
  //     id: 11,
  //     fullName: 'Trương Thị Hoài Linh',
  //     religiousName: 'Huệ Duyên Hương',
  //     registerCode: 'HD2-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
  //     departmentCode: 'HD2',
  //     positionType: 2,
  //   },
  //   {
  //     id: 12,
  //     fullName: 'Trương Thị Hoài Linh',
  //     religiousName: 'Huệ Duyên Hương',
  //     registerCode: 'HDTN-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
  //     departmentCode: 'HDTN',
  //     positionType: 2,
  //   },
  //   {
  //     id: 13,
  //     fullName: 'Trương Thị Hoài Linh',
  //     religiousName: 'Huệ Duyên Hương',
  //     registerCode: 'HMS-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
  //     departmentCode: 'HMS',
  //     positionType: 2,
  //   },
  //   {
  //     id: 14,
  //     fullName: 'Trương Thị Hoài Linh',
  //     religiousName: 'Huệ Duyên Hương',
  //     registerCode: 'KSD-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
  //     departmentCode: 'KSD',
  //     positionType: 2,
  //   },
  //   {
  //     id: 15,
  //     fullName: 'Trương Thị Hoài Linh',
  //     religiousName: 'Huệ Duyên Hương',
  //     registerCode: 'MT-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
  //     departmentCode: 'MT',
  //     positionType: 2,
  //   },
  //   {
  //     id: 16,
  //     fullName: 'Trương Thị Hoài Linh',
  //     religiousName: 'Huệ Duyên Hương',
  //     registerCode: 'NSDL-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
  //     departmentCode: 'NSDL',
  //     positionType: 2,
  //   },
  //   {
  //     id: 17,
  //     fullName: 'Trương Thị Hoài Linh',
  //     religiousName: 'Huệ Duyên Hương',
  //     registerCode: 'TGN-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
  //     departmentCode: 'TGN',
  //     positionType: 2,
  //   },
  //   {
  //     id: 18,
  //     fullName: 'Trương Công Đạt',
  //     religiousName: 'Tịnh Hiệp Bản',
  //     registerCode: 'TGT-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongCongDat_TinhHiepBan.jpg',
  //     departmentCode: 'TGT',
  //     positionType: 2,
  //   },
  //   {
  //     id: 19,
  //     fullName: 'Trương Công Đạt',
  //     religiousName: 'Tịnh Hiệp Bản',
  //     registerCode: 'TK-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongCongDat_TinhHiepBan.jpg',
  //     departmentCode: 'TK',
  //     positionType: 2,
  //   },
  //   {
  //     id: 20,
  //     fullName: 'Trương Công Đạt',
  //     religiousName: 'Tịnh Hiệp Bản',
  //     registerCode: 'TKY-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongCongDat_TinhHiepBan.jpg',
  //     departmentCode: 'TKY',
  //     positionType: 2,
  //   },
  //   {
  //     id: 21,
  //     fullName: 'Trương Công Đạt',
  //     religiousName: 'Tịnh Hiệp Bản',
  //     registerCode: 'TN-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongCongDat_TinhHiepBan.jpg',
  //     departmentCode: 'TN',
  //     positionType: 2,
  //   },
  //   {
  //     id: 22,
  //     fullName: 'Trương Công Đạt',
  //     religiousName: 'Tịnh Hiệp Bản',
  //     registerCode: 'VN-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongCongDat_TinhHiepBan.jpg',
  //     departmentCode: 'VN',
  //     positionType: 2,
  //   },
  //   {
  //     id: 23,
  //     fullName: 'Trương Công Đạt',
  //     religiousName: 'Tịnh Hiệp Bản',
  //     registerCode: 'XE-0005',
  //     organzationStuctureName: 'CTN TP.HCM',
  //     avatarPath: '../../assets/avatar/TruongCongDat_TinhHiepBan.jpg',
  //     departmentCode: 'XE',
  //     positionType: 2,
  //   },
  // ];

  public enum: typeof CardType = CardType;
  public recordsPerPage: number = 5;
  public pages: Page[] = [];
  public cards: Member[] = [];
  private subCards = new Subscription();

  public URL_PATH: string = 'https://dangkydaile.ctnpq.com/register-info/';
  
  public constructor(private cardPritingService: CardPrintingService) {}

  public ngOnInit(): void {
    this.getCardsPrinting();
  }

  public getCardsPrinting(){
    this.cardPritingService.getCardsPrinting().subscribe((data) => {
      this.cards.push(...data);

      this.addQRCodeLink(this.cards);

      const pagingResult = paging(this.cards, this.recordsPerPage);

      this.pages.push(...pagingResult);
    });
  }

  public addQRCodeLink(cards: Member[]){
    cards.forEach(member => {
      member.qrCodeLink = this.URL_PATH + member.id;
    });
  }

  ngOnDestroy() {
    this.subCards.unsubscribe();
  }
}
