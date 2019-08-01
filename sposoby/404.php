<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @package materialwp
 */

get_header(); ?>

<div class="container">
	<div class="row">

	<div id="primary" class="col-md-12 col-lg-12">
		<main id="main" class="site-main" role="main">

			<meta charset="UTF-8">

<h1>Error 404 - Podany adres strony jest nie właściwy.</h1>
<br/><br/>
<h3>Proszę <a href="<?php bloginfo('home'); ?>"> Kliknij tu</a> wróć na strone główną.</h3>

		</main><!-- #main -->
	</div><!-- #primary -->

	</div> <!-- .row -->
</div> <!-- .container -->

<?php get_footer(); ?>
