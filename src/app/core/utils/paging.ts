export function paging(records: any[], recordsPerPage: number) : any[] {
    let pages: any[] = [];
    const totalPages = Math.ceil(records.length / recordsPerPage);

    for (let pageNo = 0; pageNo < totalPages; pageNo++) {
      console.log('page', pageNo);
      let range: any[] = getRecordsPerPage(pageNo, records, recordsPerPage);
      
      pages.push({ pageNo: pageNo + 1, pageContent: [...range] });
    }

    return pages;
}

export function getRecordsPerPage(page: number = 0, records: any[], recordsPerPage: number = 1): any[] {
    let range: any[] = [];
    let startIndex: number = recordsPerPage * page;
    let endIndex: number = startIndex + recordsPerPage;
    console.log("start ~ end", startIndex, endIndex);

    for (let index = startIndex; index < endIndex; index++) {
      if (records[index]) {
        range.push(records[index]);
      }
    }

    return range;
  }