<div class="row">
<?php if(has_post_thumbnail()):?>
<div>
<div class="thumbnail"><?php the__post_thumbnail('medium');?></div>
</div>
<div class="text">
<?php the excerpt();?>
</div>
<?php else: ?>
<div class="all">
<?php the_excerpt();?>
</div>
<?php endif;?>
</div>