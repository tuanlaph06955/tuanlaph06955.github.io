<script type="text/javascript">
 
    $(document).ready(function() {
 
        $("#myForm").validate({
            rules: {
                name: "required",
                phone: {
                    required: true,
                    minlength: 10,
                },
                email: "required",
                title: {
                    required: true,
                    maxlength: 20,
                },
                content: "required",
            },
            messages: {
                name: "Vui lòng nhập tên",
                phone: {
                    required: "Vui lòng nhập số điện thoại",
                    minlength: "Số điện thoại không đúng",
                },
                email: "Vui lòng nhập email",
                title: {
                    required: "Vui lòng nhập tiêu đề",
                    maxlength: "Tiêu đề quá dài", 
                },
                content: "Vui lòng nhập nội dung",
            }
        })
    });
    </script>