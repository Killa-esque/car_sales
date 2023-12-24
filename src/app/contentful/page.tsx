import contentfulClient from '../../contentful/contentfulClient'; // Adjust the path as needed
import { Entry } from 'contentful';

export async function loader() {
  const client = contentfulClient({ preview: false });
  const previewClient = contentfulClient({ preview: true });

  const regularData = await client.getEntries<Entry<any>>();
  const previewData = await previewClient.getEntries<Entry<any>>();

  return { data: { regularData, previewData } };
}

interface TestPageProps {
  data: {
    regularData: Entry<any>[];
    previewData: Entry<any>[];
  };
}

const TestPage: React.FC<TestPageProps> = ({ data: { regularData, previewData } }) => {
  return (
    <div>
      <h1>Regular Content</h1>
      {/* Render regular content */}

      <h1>Preview Content</h1>
      {/* Render preview content */}
    </div>
  );
}

export default TestPage;
