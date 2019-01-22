<?php
if(!isset($_SESSION['user_email']))
{
    header('Location: login.php');
}
?>
<div class="row">
    <div class="col-sm-12">
        <h1>Categories</h1>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <?php
            $get_brn = "select * from brands";
            $run_brn = mysqli_query($con,$get_brn);
            $count_brn = mysqli_num_rows($run_brn);
            if($count_brn==0){
                echo "<h2> No Brands found in selected criteria </h2>";
            }
            else {
                $i = 0;
                while ($row_brn = mysqli_fetch_array($run_brn)) {
                    $brn_id = $row_brn['brand_id'];
                    $brn_title = $row_brn['brand_title'];
                    ?>
                    <tr>
                        <th scope="row"><?php echo ++$i; ?></th>
                        <td><?php echo $brn_title; ?></td>
                        <td><a href="index.php?edit_brn=<?php echo $brn_id?>" class="btn btn-primary">
                                <i class="fa fa-edit"></i> Edit
                            </a>
                            <a href="index.php?del_brn=<?php echo $brn_id?>" class="btn btn-danger">
                                <i class="fa fa-trash-alt"></i> Delete
                            </a>
                        </td>
                    </tr>
                    <?php
                }
            }
            ?>
            </tbody>
        </table>
    </div>
</div>