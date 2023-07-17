import React from 'react';
import { Google, Microsoft, Apple, GitHub } from 'supertokens-auth-react/recipe/thirdparty';
import { ThirdParty } from 'supertokens-auth-react/recipe/thirdparty';

export default function LoginPage() {
  return (
    <div>
      <ThirdParty>
        <Google clientId="YOUR_GOOGLE_CLIENT_ID" />
        <Microsoft clientId="YOUR_MICROSOFT_CLIENT_ID" />
        <Apple clientId="YOUR_APPLE_CLIENT_ID" />
        <GitHub clientId="YOUR_GITHUB_CLIENT_ID" />
      </ThirdParty>
    </div>
  );
}