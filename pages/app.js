var swiper = new Swiper(".mySwiper",{
    slidesPerview: 1,
    centeredSlides:true,
    loop:true,
    spaceBetween:30,
    grabCursor:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints : {
        991: {
            slidesPerview: 1
        }
    }
});

function reservarTurno(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Esta Segura/o de Reservar Turno?",
        text: "Debes estar seguro de poder asistir al mismo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, Estoy Seguro/a!",
        cancelButtonText: "No, Cancelar!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Turno Reservado!",
            text: "Ya reservamos tu turno.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            text: "Tu turno no fue reservado, te esperamos la proxima vez :)",
            icon: "error"
          });
        }
      });
};
