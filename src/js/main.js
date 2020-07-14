//menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

//kendo ui
$(document).ready(function() {
    //datepicker
    $("#datepicker1").kendoDatePicker();
    $("#datepicker2").kendoDatePicker();
    $("#daterangepicker").kendoDateRangePicker();

    //input
    $("#textbox1").kendoTextBox({ placeholder: "請輸入" });
    $("#textbox2").kendoTextBox({ placeholder: "請輸入" });
    $("#textbox3").kendoTextBox({ placeholder: "請輸入" });
    $("#textbox4").kendoTextBox({ placeholder: "請輸入" });
    $("#textbox5").kendoTextBox({ placeholder: "請輸入" });
    $("#textbox6").kendoTextBox({ placeholder: "請輸入" });
    $("#textbox7").kendoTextBox({ placeholder: "請輸入" });
    $("#textbox8").kendoTextBox({ placeholder: "請輸入" });
    $("#textbox9").kendoTextBox({ placeholder: "請輸入" });
    $("#textbox10").kendoTextBox({ placeholder: "請輸入" });
    $("#textbox11").kendoTextBox({ placeholder: "請輸入" });
    $("#textbox12").kendoTextBox({ placeholder: "請輸入" });
    $("#textbox13").kendoTextBox({ placeholder: "請輸入" });
    $("#textbox14").kendoTextBox({ placeholder: "請輸入" });
    $("#textbox15").kendoTextBox({ placeholder: "請輸入" });

    //dropdown
    $("#dropdown1").kendoComboBox();
    $("#dropdown2").kendoComboBox();
    $("#dropdown3").kendoComboBox();

    //combo dropdown
    $("#combo1").kendoComboBox({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: [
            { text: "EE", value: "1" },
            { text: "HH", value: "2" },
            { text: "PP", value: "3" },
            { text: "花卉", value: "4" }
        ],
        filter: "contains",
        suggest: true,
        index: 3
    });
    $("#combodropdown1").kendoComboBox();

    var fabric = $("#combo1").data("kendoComboBox");
    var select = $("#combodropdown1").data("kendoComboBox");

    //listbox
    $("#optional").kendoListBox({
        connectWith: "selected",
        toolbar: {
            tools: ["moveUp", "moveDown", "transferTo", "transferFrom", "transferAllTo", "transferAllFrom", "remove"]
        }
    });
    $("#selected").kendoListBox();

    //upload
    $("#fileTypes").kendoMultiSelect({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: [
            { text: "jpg", value:"jpg" },
            { text: "pdf", value:"pdf" },
            { text: "docx", value:"docx" },
            { text: "xlsx", value: "xlsx" },
            { text: "zip", value:"zip" },
        ],
        value:["jpg","pdf","docx","xlsx","zip"],
        change: onChange,
    });

    function onChange() {
        var upload = $("#files").getKendoUpload();
        upload.destroy();

        initUpload();
    }

    $("#limitUploadSize").change(function () {
        var upload = $("#files").getKendoUpload();
        upload.destroy();

        initUpload();
    });

    var initUpload = function () {
        var validation = {};
        var limitUploadSize = $("#limitUploadSize").prop("checked");
        var filetypes = $("#fileTypes").getKendoMultiSelect().value();
        if (limitUploadSize) {
            validation.maxFileSize = 4194304;
        }
        validation.allowedExtensions = filetypes

        $("#files").kendoUpload({
            async: {
                chunkSize: 11000,// bytes
                saveUrl: "chunkSave",
                removeUrl: "remove",
                autoUpload: false
            },
            validation: validation,
            dropZone: ".dropZoneElement"
        }).data("kendoUpload");
    };
    initUpload();
});