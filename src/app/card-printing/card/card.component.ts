import { Component, OnInit } from '@angular/core';
import { Card } from '../../core/models/card';
import { CardType } from 'src/app/core/models/constants';
import { Page } from 'src/app/core/models/page';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public data: Card[] = [
    {
      id: 1,
      fullName: 'Phạm Hoàng Dủ',
      religiousName: 'Đồng Khả Nhân',
      registerCode: 'ATN-0001',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/279834538_789486402022850_1764428629689475795_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LAU5WJY1dzgAX_6k-sU&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfA6405k97f5WGw5sZRdpsvrjenqU7oyUDLF_AOK4eNdeg&oe=637A0348',
      departmentCode: 'ATN',
    },
    {
      id: 2,
      fullName: 'Đặng Văn Hòa',
      religiousName: 'Nghiêm Khải Tuệ',
      registerCode: 'BD-0002',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/DangVanHoa_NghiemKhaiTue.jpg',
      departmentCode: 'BD',
    },
    {
      id: 3,
      fullName: 'Nguyễn Thị Vân Anh',
      religiousName: '',
      registerCode: 'BDS-0004',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath:
        'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg',
      departmentCode: 'BDS',
    },
    {
      id: 4,
      fullName: 'Lê Vũ Như',
      religiousName: 'Viên Ân Nghĩa',
      registerCode: 'BRC-0004',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/LeVuNhu_VienAnNghia.png',
      departmentCode: 'BRC',
    },
    {
      id: 5,
      fullName: 'Trương Thị Hoài Linh',
      religiousName: 'Huệ Duyên Hương',
      registerCode: 'BV-0004',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
      departmentCode: 'BV',
    },
    {
      id: 6,
      fullName: 'Trương Thị Hoài Linh',
      religiousName: 'Huệ Duyên Hương',
      registerCode: 'CD-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
      departmentCode: 'CD',
    },
    {
      id: 7,
      fullName: 'Trương Thị Hoài Linh',
      religiousName: 'Huệ Duyên Hương',
      registerCode: 'CH-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
      departmentCode: 'CH',
    },
    {
      id: 8,
      fullName: 'Trương Thị Hoài Linh',
      religiousName: 'Huệ Duyên Hương',
      registerCode: 'CT-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
      departmentCode: 'CT',
    },
    {
      id: 9,
      fullName: 'Trương Thị Hoài Linh',
      religiousName: 'Huệ Duyên Hương',
      registerCode: 'HD-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
      departmentCode: 'HD',
    },
    {
      id: 10,
      fullName: 'Trương Thị Hoài Linh',
      religiousName: 'Huệ Duyên Hương',
      registerCode: 'HD1-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
      departmentCode: 'HD1',
    },
    {
      id: 11,
      fullName: 'Trương Thị Hoài Linh',
      religiousName: 'Huệ Duyên Hương',
      registerCode: 'HD2-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
      departmentCode: 'HD2',
    },
    {
      id: 12,
      fullName: 'Trương Thị Hoài Linh',
      religiousName: 'Huệ Duyên Hương',
      registerCode: 'HDTN-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
      departmentCode: 'HDTN',
    },
    {
      id: 13,
      fullName: 'Trương Thị Hoài Linh',
      religiousName: 'Huệ Duyên Hương',
      registerCode: 'HMS-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
      departmentCode: 'HMS',
    },
    {
      id: 14,
      fullName: 'Trương Thị Hoài Linh',
      religiousName: 'Huệ Duyên Hương',
      registerCode: 'KSD-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
      departmentCode: 'KSD',
    },
    {
      id: 15,
      fullName: 'Trương Thị Hoài Linh',
      religiousName: 'Huệ Duyên Hương',
      registerCode: 'MT-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
      departmentCode: 'MT',
    },
    {
      id: 16,
      fullName: 'Trương Thị Hoài Linh',
      religiousName: 'Huệ Duyên Hương',
      registerCode: 'NSDL-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
      departmentCode: 'NSDL',
    },
    {
      id: 17,
      fullName: 'Trương Thị Hoài Linh',
      religiousName: 'Huệ Duyên Hương',
      registerCode: 'TGN-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongThiHoaiLinh_HueDuyenHuong.png',
      departmentCode: 'TGN',
    },
    {
      id: 18,
      fullName: 'Trương Công Đạt',
      religiousName: 'Tịnh Hiệp Bản',
      registerCode: 'TGT-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongCongDat_TinhHiepBan.jpg',
      departmentCode: 'TGT',
    },
    {
      id: 19,
      fullName: 'Trương Công Đạt',
      religiousName: 'Tịnh Hiệp Bản',
      registerCode: 'TK-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongCongDat_TinhHiepBan.jpg',
      departmentCode: 'TK',
    },
    {
      id: 20,
      fullName: 'Trương Công Đạt',
      religiousName: 'Tịnh Hiệp Bản',
      registerCode: 'TKY-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongCongDat_TinhHiepBan.jpg',
      departmentCode: 'TKY',
    },
    {
      id: 21,
      fullName: 'Trương Công Đạt',
      religiousName: 'Tịnh Hiệp Bản',
      registerCode: 'TN-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongCongDat_TinhHiepBan.jpg',
      departmentCode: 'TN',
    },
    {
      id: 22,
      fullName: 'Trương Công Đạt',
      religiousName: 'Tịnh Hiệp Bản',
      registerCode: 'VN-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongCongDat_TinhHiepBan.jpg',
      departmentCode: 'VN',
    },
    {
      id: 23,
      fullName: 'Trương Công Đạt',
      religiousName: 'Tịnh Hiệp Bản',
      registerCode: 'XE-0005',
      organzationStuctureName: 'CTN TP.HCM',
      avatarPath: '../../assets/avatar/TruongCongDat_TinhHiepBan.jpg',
      departmentCode: 'XE',
    },
  ];

  public enum: typeof CardType = CardType;
  
  public cardPerPage: number = 5;

  public pages: Page[] = [];
  
  constructor() {}

  ngOnInit(): void {
    this.paging(this.data);
  }

  paging(data: Card[]) {
    const pageNum = Math.round(data.length / this.cardPerPage);
    console.log("số trang: ", pageNum);
    
    let current = 0;
    let range: Card[] = [];
    
    for(let i = 1; i <= data.length; i++){
      range.push(data[i - 1]);
      console.log("current", current);

      if(i % pageNum == 0){
        console.log("range", range);
        this.pages.push({pageNo: current, pageContent: [...range]})
        
        current +=1;
        range = [];
      }
    }
    
    console.log("page", this.pages);
    
  }
}
