<h1> Oscilloscope </h1>
<p> Parts A-D videos are commited and labeled above </p>
<p> For part D Pulse range was between 900 and 950 Ous </p>
<p> Period range was between 19.5 and 20 </p>
<h2> I2C </h2>
<p> UART ports are relatively difficult to work with, do not transfer clock data as they are asynchronus, and need at least one start and stop bit, which eat into the data rate. </p>
<p> SPI ports are fairly cumbersome, as the amount of pins required for connections between devices is more than most. As well as each slave needed a seperate I/O chip select pin on the master. </p>
<p> I2C ports can support up to 1008 slaves with the connection of just two wires. Has a multi-master system, but masters can not speak to eachother. It is simpler to introduce in software, and asynchronous serial. One bit of meta data is sent with every 8 bits of data.
  <h3> I2C part 2 </h3>
  <p> image of address frame https://imgur.com/gallery/6GSu2an </p>
  <p> I2C will continue to write functions even when nothing is connected </p>
  <p> the main differance between the adresses is what the binary code ends in, either a 0 or 1</p>
