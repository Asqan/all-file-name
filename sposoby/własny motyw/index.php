
<?php get_header(); ?>
<main>
<?php if(have_posts()): ?> // jeśli na stronie są jakieś wpisy
<?php while (have_posts()): the_post(); ?> //to kązdy jeden
<h3><?php the_title(); ?></h3>// wyświetl w ten sposób
<div class="content">
<script src="https://affiliate44.com.pl/widget/script.js?aff_id=1379&category=1"></script>
</div>
<?php endwhile ; ?>
<?php else : ?>
<h2> Nic nie znaleziono </h2>
<?php endif; ?>
</main>


Uczeń rozumie zasadnicze punkty rozmowy wyrażane za pomocą jasnego i standardowego języka, gdy rozmowa dotyczy spraw znanych, związanych ze szkołą, czasem wolnym, itp. Radzi sobie w większości sytuacji w czasie podróży w regionie języka docelowego. Umie wypowiedzieć się w sposób prosty i zwięzły na tematy dotyczące życia codziennego i zainteresowań. Potrafi opowiedzieć wydarzenie, przeżycie osobiste lub sen, wyrazić nadzieję lub cel, jak również przedstawić krótko uzasadnienie lub wyjaśnienie dotyczące projektu lub pomysłu.


<?php get_footer(); ?>


