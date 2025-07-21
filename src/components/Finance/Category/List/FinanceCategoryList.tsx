import { useCategoriesQuery } from "@/api/Finance/query";

export const FinanceCategoryList = () => {
  const { isFetching, data: categories } = useCategoriesQuery();

  return (
    <div className="h-full overflow-hidden">
      <LoadingContainer className="h-full" message="در حال دریافت دسته بندی ها..." loading={isFetching}>
        <NotFoundContainer message="دسته بندی ای یافت نشد" itemCount={categories.length}>
          <FinanceCategoryListContent />
        </NotFoundContainer>
      </LoadingContainer>
    </div>
  );
};
