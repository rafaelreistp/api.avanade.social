import { UserVm } from "./user-vm.model";
import { ApiModelProperty } from "@nestjs/swagger";

export class LoginResponseVm {
    @ApiModelProperty()
    token: string;
    
    @ApiModelProperty()
    user: UserVm;
}