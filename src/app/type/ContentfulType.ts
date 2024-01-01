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
    },
    entries: {
        block: [ProductDetail]
    }
}

export type Content = {
    json: any;
    links: Links;
}

export interface Product extends Entry {
    model: string;
    slug: string;
    price: string;
    overviewSection: [{
        title: string;
        content: string;
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
    title: string;
    slug: string;
    summary: string;
    content: Content;
    date: Date;
    thumbnail: Media;
    authorName: string;
}

export interface ProductDetail extends Entry {
    title: string,
    content: [{
        title: string,
        description: string,
    }]
    imagesCollection: [Media]
}