module.exports = function templateEmailPoblador(titulo, tituloQR){
  return `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>${titulo}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 ">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
    <style>
      * {
        box-sizing: border-box;
      }
    </style>
  </head>
  <body style="font-family:Roboto;margin:0;width:100%;max-width:100vw;max-height:100vh;background-color:white;">
      
      <!--     content -->
      <div style="font-family:Roboto;margin:0;padding:1rem;width:100%;max-height:88vh;overflow-y:scroll;">
        <div style="font-family:Roboto;margin:0;">
          <div
          style="background-color:#AD8FD7;position:absolute;bottom:0;left:0;right:0;color:white;line-height:0.6;text-align:center;padding:0.5rem 0;height:12vh">
            <p>Sistema de Gestion de Quejas y Reclamos a Empresa Mineras </p>
            <p>Creado por: Fernando Sandoval </p>
          </div>
            <p style="font-family:Roboto;margin:0;font-size:1.2rem;margin-bottom:1rem;">Estimado(a),</p>
            <p style="font-family:Roboto;margin:0;font-size:1.2rem;margin-bottom:1rem;">
              Su ticket sobre ${tituloQR} ha sido creado con éxito.
            </p>
        </div>        
      </div>

      <!--   footer -->
      <div
        style="background-color:#01205f;position:absolute;bottom:0;left:0;right:0;color:white;line-height:0.6;text-align:center;padding:0.5rem 0;height:12vh">
        <p>Enviado por Sistema de Gestión de Quejas y Reclamos</p>
        <p>Lima, Perú</p>
      </div>
  </body>
</html>
`;
}
