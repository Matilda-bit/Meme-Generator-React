import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';

import MemeForm from '../components/memes/MemeForm';

function EditMemePage() {
  const data = useRouteLoaderData('meme-detail');
  return <MemeForm id={data.meme.id} method="patch" meme={data.meme} />;
}

export default EditMemePage;