import React, { Suspense } from "react";

import AllFormsSection from "@/components/sections/all-forms-section/AllFormsSection";
import AllFormsFetcher from "@/components/sections/all-forms-section/AllformsSection.fetcher";
import { mockAllFormsSectionProps } from "@/components/sections/all-forms-section/AllFormsSection.mocks";
import CreatFormSectionFetcher from "@/components/sections/create-form-section/CreatFormSection.fetcher";

export default function Dashboard() {
  return (
    <div>
      <CreatFormSectionFetcher />

      <Suspense
        fallback={
          <AllFormsSection
            loading={true}
            error={false}
            data={mockAllFormsSectionProps.base.data}
          />
        }
      >
        <AllFormsFetcher />
      </Suspense>
    </div>
  );
}
