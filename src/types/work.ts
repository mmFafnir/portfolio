


export type TListItemWork = {
    id: string,
    value: string
}

export type TWork = {
    id: string,
    title: string,
    type: string,
    img: string,
    description: string,
    list: TListItemWork[],
    url: string,
    urlGit?: string
}