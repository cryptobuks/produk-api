import { ApiModelProperty } from '@nestjs/swagger';

export class ProductDto {
    
    @ApiModelProperty()
    prod_name: string;
    
    @ApiModelProperty()
    prod_desc: string;

    @ApiModelProperty()
    prod_cat: string;
}