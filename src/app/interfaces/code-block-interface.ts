export interface codeBlock {
    titleBlock: string,
    description: string,
    canCopy: boolean;
    codeString: string | null,
    codeStringList: codeBlockList[] | null
}


export interface codeBlockList {
    language: string,
    codeStringDetail: string,
    canCopy: boolean;
}


export class CodeBlockImpl implements codeBlock {
    titleBlock: string;
    description: string;
    canCopy: boolean;
    codeString: string | null;
    codeStringList: codeBlockList[] | null;

    constructor(
        titleBlock: string = "",
        description: string = "",
        canCopy: boolean = false,
        codeString: string | null = null,
        codeStringList: codeBlockList[] | null = null
    ) {
        this.titleBlock = titleBlock;
        this.description = description;
        this.canCopy = canCopy;
        this.codeString = codeString;
        this.codeStringList = codeStringList;
    }
}

