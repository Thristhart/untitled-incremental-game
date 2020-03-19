=== intro ===
// put in some intro bullshit about the world maybe (different scene maybe)
PC: Finally my long journey is over. I've made it to Parnax's tower!
-> intro_choices

=== intro_choices ===
NAR: An outer wall encircles the tall tower. Gold runes arc across the smooth blue blocks of the wall.
NAR: A set of double doors blocks your way.
+ [Look up at the tower]
  -> tower_description
+ [Knock on the door]
  -> knock

=== tower_description ===
NAR: Despite the otherwise clear weather, the tower is shrouded in dark clouds.
NAR: The first level appears to be made of the same blue stone as the outer walls.
-> intro_choices

=== knock ===
NAR: You reach up and knock lightly on the huge doors.
NAR: You don't hear an answer, but you do hear the crashing of metal hitting stone.
// go to interaction with FAMILIAR where the PC gets yelled at for interrupting organizing armor