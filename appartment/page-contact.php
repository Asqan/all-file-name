<?php /*Template Name: page contact */ ?>
<?php get_header();?>

<?php //echo do_shortcode("[formularz_kontaktowy]"); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<?php the_content();?>
<?php endwhile; else : ?>
<?php endif; ?>
<?php get_footer();?>