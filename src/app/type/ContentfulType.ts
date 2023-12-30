export interface Entry {
    sys: {
        id: string
    }
}

export interface Media extends Entry {
    url: string;
    title: string;
    description: string;
}

export type Links = {
    assets: {
        block: [Media]
    }
}

export type Content = {
    json: any;
    links: Links;
}

export interface Product extends Entry {
    model: String;
    slug: String;
    price: String;
    overviewSection: [{
        title: String;
        content: String;
    }];
    colorsCollection: {
        items: [Media]
    };
    thumbnail: Media;
    brochure: Media;
    mediasCollection: {
        items: [Media]
    };
    content: Content;
}

export interface News extends Entry {
    title: String;
    slug: String;
    summary: String;
    content: Content;
    date: Date;
    thumbnail: Media;
    authorName: String;
}
