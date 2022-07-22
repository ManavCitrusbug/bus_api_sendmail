from unicodedata import name
from django.urls import path
from . import views

app_name='customadmin'  

urlpatterns = [
    path("", views.IndexView.as_view(), name="dashboard"),
    path("month/graph/", views.Monthgraph.as_view(), name="month-graph"),
    path("date/graph/", views.Dategraph.as_view(), name="date-graph"),
    path("year/graph/", views.Yeargraph.as_view(), name="year-graph"),
        # User
    path("users/", views.UserListView.as_view(), name="user-detail"),
    
   
    path("users/<int:pk>/detail/", views.UserDetailView.as_view(), name="user-detailview"),

    path("journeydetail/detail/<int:pk>/", views.JourneyDetailView.as_view(), name="journey-detailview"),
    path("users/", views.UserListView.as_view(), name="user-list"),
    path("users/create/", views.UserCreateView.as_view(), name="user-create"),
    
    path("users/<int:pk>/update/", views.UserUpdateView.as_view(), name="user-update"),
    path("users/<int:pk>/delete/", views.UserDeleteView.as_view(), name="user-delete"),
    # path("users/<int:pk>/password/", views.UserPasswordView.as_view(), name="user-password"),
    path("ajax-users", views.UserAjaxPagination.as_view(), name="user-list-ajax"),
       
    path("transport/", views.AddbusListView.as_view(), name="transport-list"),
    path("ajaxbus/", views.Busajax.as_view(),name='ajaxbus'),
    path("pessenger/", views.PessengerListView.as_view(), name="pessenger-list"),
    path("category/", views.CategoryListView.as_view(), name="category-list"),
    path("journey/", views.JourneyListView.as_view(), name="journey-list"),

    
    
    path("busdetail/<int:pk>/detail/", views.AddbusDetailView.as_view(), name="transport-detailview"),
    path("category/delete/<int:pk>", views.CategoryDeleteView.as_view(), name="category-delete"),
    path("transport/create/", views.AddbusCreateView.as_view(), name="transport-create"),
    path("category/create/", views.CategoryCreateView.as_view(), name="category-create"),
  
    path("journey/create/", views.JourneyCreateView.as_view(), name="journey-create"),
    path("transport/edit/<int:pk>", views.AddbusUpdateView.as_view(), name="transport-edit"),
    path("journey/edit/<int:pk>", views.JourneyUpdateView.as_view(), name="journey-edit"),

   
    path("transport/delete/<int:pk>", views.BusDeleteView.as_view(), name="transport-delete"),
    path("journey/delete/<int:pk>", views.JourneyDeleteView.as_view(), name="journey-delete"),
   
   
   
   

    # path("export_user_csv", views.export_user_csv, name="export_user_csv"),
]
    
# urlpatterns +=[
# #------------------------------------------------------------------------------------------------------
#     #Testimonial
#     path("testimonials/", views.TestimonialListView.as_view(), name="testimonial-detail"),
#     path("testimonials/", views.TestimonialListView.as_view(), name="testimonial-list"),
#     path("testimonials/create/", views.TestimonialCreateView.as_view(), name="testimonial-create"),
#     path("testimonials/<int:pk>/update/", views.TestimonialUpdateView.as_view(), name="testimonial-update"),
#     path("testimonials/<int:pk>/delete/", views.TestimonialDeleteView.as_view(), name="testimonial-delete"),
#     path("ajax-testimonials", views.TestimonialAjaxPagination.as_view(), name="testimonial-list-ajax"),
# #------------------------------------------------------------------------------------------------------
#     #Service categories
#     path("service-categories/<int:pk>/detail/", views.ServiceCategoryDetailView.as_view(), name="servicecategory-detailview"),
#     path("service-categories/", views.ServiceCategoryListView.as_view(), name="service-category-detail"),
#     path("service-categories/", views.ServiceCategoryListView.as_view(), name="servicecategory-list"),
#     path("service-categories/create/", views.ServiceCategoryCreateView.as_view(), name="servicecategory-create"),
#     path("service-categories/<int:pk>/update/", views.ServicecategoryUpdateView.as_view(), name="servicecategory-update"),
#     path("service-categories/<int:pk>/delete/", views.ServiceCategoryDeleteView.as_view(), name="servicecategory-delete"),
#     path("ajax-service-categories", views.ServiceCategoryAjaxPagination.as_view(), name="servicecategory-list-ajax"),
# #------------------------------------------------------------------------------------------------------
#     #Inquiry Type
#     path("inquiry-types/", views.InquiryTypeListView.as_view(), name="inquiry-type-detail"),
#     path("inquiry-types/", views.InquiryTypeListView.as_view(), name="inquirytype-list"),
#     path("inquiry-type/create/", views.InquiryTypeCreateView.as_view(), name="inquirytype-create"),
#     path("inquiry-type/<int:pk>/update/", views.InquiryTypeUpdateView.as_view(), name="inquirytype-update"),
#     path("inquiry-type/<int:pk>/delete/", views.InquiryTypeDeleteView.as_view(), name="inquirytype-delete"),
#     path("ajax-inquiry-types", views.InquiryTypeAjaxPagination.as_view(), name="inquirytype-list-ajax"),
# #------------------------------------------------------------------------------------------------------
#     #Inquiry
#     path("inquiry/<int:pk>/detail/", views.InquiryDetailView.as_view(), name="inquiry-detailview"),

#     path("inquiry/", views.InquiryListView.as_view(), name="inquiry-detail"),
#     path("inquiry/", views.InquiryListView.as_view(), name="inquiry-list"),
#     path("inquiry/create/", views.InquiryCreateView.as_view(), name="inquiry-create"),
#     path("inquiry/<int:pk>/update/", views.InquiryUpdateView.as_view(), name="inquiry-update"),
#     path("inquiry/<int:pk>/delete/", views.InquiryDeleteView.as_view(), name="inquiry-delete"),
#     path("ajax-inquiry", views.InquiryAjaxPagination.as_view(), name="inquiry-list-ajax"),
# #------------------------------------------------------------------------------------------------------
#     #Phone NUmber Code
#     path("phone-codes/", views.PhoneNumberCodeListView.as_view(), name="phone-codes-list"),
#     path("phone-codes/", views.PhoneNumberCodeListView.as_view(), name="phonenumbercode-list"),
#     path("phone-codes/create/", views.PhoneNumberCodeCreateView.as_view(), name="phonenumbercode-create"),
#     path("phone-codes/<int:pk>/update/", views.PhoneNumberCodeUpdateView.as_view(), name="phonenumbercode-update"),
#     path("phone-codes/<int:pk>/delete/", views.PhoneNumberCodeDeleteView.as_view(), name="phonenumbercode-delete"),
#     path("ajax-phone-codes", views.PhoneNumberCodeAjaxPagination.as_view(), name="phonenumbercode-list-ajax"),
# #------------------------------------------------------------------------------------------------------
#     #Foundation Code
#     path("foundation-code/", views.FoundationCodeListView.as_view(), name="foundationcode-list"),
#     path("foundation-code/", views.FoundationCodeListView.as_view(), name="foundationcode-list"),
#     path("foundation-code/create/", views.FoundationCodeCreateView.as_view(), name="foundationcode-create"),
#     path("foundation-code/<int:pk>/update/", views.FoundationCodeUpdateView.as_view(), name="foundationcode-update"),
#     path("foundation-code/<int:pk>/delete/", views.FoundationCodeDeleteView.as_view(), name="foundationcode-delete"),
#     path("ajax-foundation-code", views.FoundationCodeAjaxPagination.as_view(), name="foundationcode-list-ajax"),
# #------------------------------------------------------------------------------------------------------
#     #Family Code
#     path("family-code/", views.FamilyCodeListView.as_view(), name="familycode-list"),
#     path("family-code/", views.FamilyCodeListView.as_view(), name="familycode-list"),
#     path("family-code/create/", views.FamilyCodeCreateView.as_view(), name="familycode-create"),
#     path("family-code/<int:pk>/update/", views.FamilyCodeUpdateView.as_view(), name="familycode-update"),
#     path("family-code/<int:pk>/delete/", views.FamilyCodeDeleteView.as_view(), name="familycode-delete"),
#     path("ajax-family-code", views.FamilyCodeAjaxPagination.as_view(), name="familycode-list-ajax"),
# #------------------------------------------------------------------------------------------------------
#     #Social Code
#     path("social-code/", views.SocialCodeListView.as_view(), name="socialcode-list"),
#     path("social-code/", views.SocialCodeListView.as_view(), name="socialcode-list"),
#     path("social-code/create/", views.SocialCodeCreateView.as_view(), name="socialcode-create"),
#     path("social-code/<int:pk>/update/", views.SocialCodeUpdateView.as_view(), name="socialcode-update"),
#     path("social-code/<int:pk>/delete/", views.SocialCodeDeleteView.as_view(), name="socialcode-delete"),
#     path("ajax-social-code", views.SocialCodeAjaxPagination.as_view(), name="socialcode-list-ajax"),
# #------------------------------------------------------------------------------------------------------
#     #Other Code
#     path("other-code/", views.OtherCodeListView.as_view(), name="othercode-list"),
#     path("other-code/", views.OtherCodeListView.as_view(), name="othercode-list"),
#     path("other-code/create/", views.OtherCodeCreateView.as_view(), name="othercode-create"),
#     path("other-code/<int:pk>/update/", views.OtherCodeUpdateView.as_view(), name="othercode-update"),
#     path("other-code/<int:pk>/delete/", views.OtherCodeDeleteView.as_view(), name="othercode-delete"),
#     path("ajax-other-code", views.OtherCodeAjaxPagination.as_view(), name="othercode-list-ajax"),
# #------------------------------------------------------------------------------------------------------
#     #Number Code
#     path("number-code/", views.NumberCodeListView.as_view(), name="numbercode-list"),
#     path("number-code/", views.NumberCodeListView.as_view(), name="numbercode-list"),
#     path("number-code/create/", views.NumberCodeCreateView.as_view(), name="numbercode-create"),
#     path("number-code/<int:pk>/update/", views.NumberCodeUpdateView.as_view(), name="numbercode-update"),
#     path("number-code/<int:pk>/delete/", views.NumberCodeDeleteView.as_view(), name="numbercode-delete"),
#     path("ajax-number-code", views.NumberCodeAjaxPagination.as_view(), name="numbercode-list-ajax"),
# #------------------------------------------------------------------------------------------------------
#     #Product
#     path("product/<int:pk>/detail/", views.ShopProductDetailView.as_view(), name="shopproduct-detailview"),
#     path("product/", views.ShopProductListView.as_view(), name="shopproduct-list"),
#     path("product/", views.ShopProductListView.as_view(), name="shopproduct-list"),
#     path("product/create/", views.ShopProductCreateView.as_view(), name="shopproduct-create"),
#     path("product/<int:pk>/update/", views.ShopProductUpdateView.as_view(), name="shopproduct-update"),
#     path("product/<int:pk>/delete/", views.ShopProductDeleteView.as_view(), name="shopproduct-delete"),
#     path("ajax-product", views.ShopProductAjaxPagination.as_view(), name="shopproduct-list-ajax"),
# #------------------------------------------------------------------------------------------------------
#     #Service
#     path("service/<int:pk>/detail/", views.ServiceDetailView.as_view(), name="service-detailview"),
#     path("service/", views.ServiceListView.as_view(), name="service-list"),
#     path("service/", views.ServiceListView.as_view(), name="service-list"),
#     path("service/create/", views.ServiceCreateView.as_view(), name="service-create"),
#     path("service/<int:pk>/update/", views.ServiceUpdateView.as_view(), name="service-update"),
#     path("service/<int:pk>/delete/", views.ServiceDeleteView.as_view(), name="service-delete"),
#     path("ajax-service", views.ServiceAjaxPagination.as_view(), name="service-list-ajax"),
# #------------------------------------------------------------------------------------------------------
#     #Purchased Product
#     path("purchased-product/", views.PurchasedProductListView.as_view(), name="purchased-product-detail"),
#     path("purchased-product/", views.PurchasedProductListView.as_view(), name="purchasedproduct-list"),
#     path("purchased-product/create/", views.PurchasedProductCreateView.as_view(), name="purchasedproduct-create"),
#     path("purchased-product/<int:pk>/update/", views.PurchasedProductUpdateView.as_view(), name="purchasedproduct-update"),
#     path("purchased-product/<int:pk>/delete/", views.PurchasedProductDeleteView.as_view(), name="purchasedproduct-delete"),
#     path("ajax-purchased-product", views.PurchasedProductAjaxPagination.as_view(), name="purchasedproduct-list-ajax"),
# #------------------------------------------------------------------------------------------------------
 
#     #Booked Services
#     path("service-booking/", views.BookedServiceListView.as_view(), name="service-booking-detail"),
#     path("service-booking/", views.BookedServiceListView.as_view(), name="bookedservice-list"),
#     path("service-booking/create/", views.BookedServiceCreateView.as_view(), name="bookedservice-create"),
#     path("service-booking/<int:pk>/update/", views.BookedServiceUpdateView.as_view(), name="bookedservice-update"),
#     path("service-booking/<int:pk>/delete/", views.BookedServiceDeleteView.as_view(), name="bookedservice-delete"),
#     path("ajax-service-booking", views.BookedServiceAjaxPagination.as_view(), name="bookedservice-list-ajax"),
# #------------------------------------------------------------------------------------------------------
#     #Time slots
#     path("time-slots/", views.TimeSlotListView.as_view(), name="time-slots-list"),
#     path("time-slots/", views.TimeSlotListView.as_view(), name="timeslot-list"),
#     path("time-slots/create/", views.TimeSlotCreateView.as_view(), name="timeslot-create"),
#     path("time-slots/<int:pk>/update/", views.TimeSlotUpdateView.as_view(), name="timeslot-update"),
#     path("time-slots/<int:pk>/delete/", views.TimeSlotDeleteView.as_view(), name="timeslot-delete"),
#     path("ajax-time-slots", views.TimeSlotAjaxPagination.as_view(), name="timeslot-list-ajax"),

# #------------------------------------------------------------------------------------------------------
#     #Category Images
#     path("category-image/", views.CategoryImageListView.as_view(), name="categoryimage-list"),
#     path("category-image/", views.CategoryImageListView.as_view(), name="categoryimage-list"),
#     path("category-image/create/", views.CategoryImageCreateView.as_view(), name="categoryimage-create"),
#     path("category-image/<int:pk>/update/", views.CategoryImageUpdateView.as_view(), name="categoryimage-update"),
#     path("category-image/<int:pk>/delete/", views.CategoryImageDeleteView.as_view(), name="categoryimage-delete"),
#     path("ajax-category-image", views.CategoryImageAjaxPagination.as_view(), name="categoryimage-list-ajax"),
# #------------------------------------------------------------------------------------------------------
# ]