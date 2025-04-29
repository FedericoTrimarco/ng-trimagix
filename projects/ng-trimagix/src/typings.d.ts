declare module 'html2pdf.js' {
    interface Html2Pdf {
      from: (element: HTMLElement | string) => Html2Pdf;
      toPdf: () => Html2Pdf;
      save: (filename?: string) => void;
      set: (options: any) => Html2Pdf;
      outputPdf: (typeFile: string) => any;
    }
  
    const html2pdf: () => Html2Pdf;
  
    export default html2pdf;
  }
  